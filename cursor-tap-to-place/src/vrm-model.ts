import * as ecs from '@8thwall/ecs'

// VRM + Animation state populated by the inline module script in index.html
interface VrmState {
  loaded: boolean
  vrm?: any           // VRM instance from @pixiv/three-vrm
  mixer?: any         // THREE.AnimationMixer driving the dance animation
  animLoaded?: boolean
  error?: any
}

declare global {
  interface Window {
    vrmState: VrmState
  }
}

ecs.registerComponent({
  name: 'vrm-model',

  schema: {
    // Vertical offset to fine-tune the model's position relative to the ground
    // @label Y Offset
    yOffset: ecs.f32,
  },

  schemaDefaults: {
    yOffset: 0,
  },

  data: {
    // Tracks whether the VRM has been attached to this entity's Object3D
    attached: ecs.boolean,
  },

  add: (world, {eid, dataAttribute}) => {
    dataAttribute.cursor(eid).attached = false
  },

  tick: (world, {eid, schema, dataAttribute}) => {
    const vrmState = window.vrmState

    // Wait until the VRM has been loaded by the module script in index.html
    if (!vrmState || !vrmState.loaded || !vrmState.vrm) return

    if (!dataAttribute.get(eid).attached) {
      // Get the Three.js Object3D managed by the ECS for this entity
      const obj = world.three.entityToObject.get(eid)
      if (!obj) return

      // Apply the Y offset so the model's feet align with the placement position
      vrmState.vrm.scene.position.y = schema.yOffset

      // Attach the VRM scene (a Three.js Group) as a child of this entity
      obj.add(vrmState.vrm.scene)

      // Notify the ECS that the raw Three.js hierarchy has changed
      world.three.notifyChanged(obj)

      dataAttribute.cursor(eid).attached = true
      console.log('VRM attached to entity', eid)
    }

    // world.time.delta is in MILLISECONDS (confirmed from runtime particle emitter code)
    const deltaSeconds = world.time.delta / 1000

    // Drive the Mixamo dance animation
    if (vrmState.mixer) {
      vrmState.mixer.update(deltaSeconds)
    }

    // Drive VRM spring bones, look-at, and expression updates every frame
    vrmState.vrm.update(deltaSeconds)
  },

  remove: (world, {eid}) => {
    const vrmState = window.vrmState
    if (!vrmState?.vrm) return

    const obj = world.three.entityToObject.get(eid)
    if (obj) {
      obj.remove(vrmState.vrm.scene)
      world.three.notifyChanged(obj)
    }
  },
})
