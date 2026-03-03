// Component that recenters the existing entity to where the ground is clicked
AFRAME.registerComponent('tap-place', {
  init() {
    const ground = document.getElementById('ground')
    if (!ground) {
      console.warn('Ground element not found for tap-place component')
      return
    }
    
    const snooEntity = document.getElementById('snoo-vrm')
    if (!snooEntity) {
      console.warn('Snoo VRM entity not found for tap-place component')
      return
    }
    
    ground.addEventListener('click', (event) => {
      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point
      
      // Get current position to preserve Y height
      const currentPos = snooEntity.getAttribute('position')
      const currentY = currentPos ? currentPos.y : 0
      
      // Move the existing entity to the tapped location, preserving its Y height
      snooEntity.setAttribute('animation', {
        property: 'position',
        to: `${touchPoint.x} ${currentY} ${touchPoint.z}`,
        easing: 'easeOutCubic',
        dur: 600,
      })
    })
  },
})
