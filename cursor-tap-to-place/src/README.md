# Interactive Touch Components – 8th Wall Studio

This project provides comprehensive **touch interaction systems** for 8th Wall Studio, including **tap-to-place** functionality and **advanced gesture controls**. Users can position objects in 3D scenes through tapping, drag objects with hold gestures, rotate with two-finger movements, and scale with pinch gestures.

---

##  Project Info

This project includes two powerful components that enable rich **object interaction** using 8th Wall's native systems:

1. **Cursor Tap to Place** - Object placement using raycasting and smooth cursor movement
2. **Gesture Components** - Advanced multi-touch gestures including hold-drag, two-finger rotation, and pinch-to-scale

Both components are **fully commented** with educational explanations, making them easy to understand, customize, and integrate into your own projects.

---

## Custom Component Overview

### **Cursor Tap to Place**

This component controls the placement behavior of an entity using **8th Wall's native raycasting** to detect the ground position and a **smoothing algorithm** to guide the cursor. When a user taps the screen, the selected object is placed at the cursor's position.

#### **Key Features:**
- **Smooth Cursor Movement:** The cursor gradually moves toward the tap location rather than snapping instantly.
- **Customizable Cursor Height (yHeight)**: Allows the cursor to hover at a fixed height above the detected ground.
- **Tap-to-Place Functionality:** Tapping the screen moves the selected entity to the cursor's position.
- **Optional Growth Animation (growOnPlace)**: Newly placed objects can scale up from zero size using a variety of easing functions.

### **Gesture Components**

This component provides comprehensive **multi-touch gesture handling** for interactive 3D objects. It supports three main gesture types with smooth animations and responsive feedback.

#### **Key Features:**
- **Hold-Drag:** Long press and drag objects across the ground plane with smooth lifting and dropping animations.
- **Two-Finger Rotation:** Rotate objects around their Y-axis using horizontal two-finger movements.
- **Pinch-to-Scale:** Scale objects up and down using pinch gestures with configurable size limits.
- **Smooth Interpolation:** Hold-drag uses smooth position interpolation for fluid movement.
- **State Machine:** Robust state management handles gesture detection and transitions.

---

## Usage

### **Cursor Tap to Place Setup**

#### **1. Setup the Component**
1. Add a **new component** script in your **8th Wall Studio** project.
2. Copy and paste the cursor-tap-to-place code into the new component.
3. Attach the **cursor-tap-to-place** component to your camera entity.

#### **2. Configure the Component**
Once added, configure the following properties in the **Inspector Panel**:

- **Cursor Entity (cursorEntity)** – The entity that follows the tap position.
- **Ground (ground)** – The entity that acts as the placement surface.
- **Placed Entity (placedEntity)** – The object that will be placed at the tap location.
- **Cursor Height (yHeight)** – Adjusts how high above the ground the cursor hovers.
- **Grow on Place (growOnPlace)** – Enables or disables scaling animation on placement.
- **Grow Speed (growSpeed)** – Defines how fast the object scales when placed.
- **Final Scale (finalX, finalY, finalZ)** – Determines the object's final size after placement.
- **Easing Function (easingFunction)** – Select from various easing effects like Quadratic, Bounce, or Elastic.

### **Gesture Components Setup**

#### **1. Setup the Component**
1. Add a **new component** script in your **8th Wall Studio** project.
2. Copy and paste the gesture-components code into the new component.
3. Attach the **gesture-components** component to any interactive entity you want to make draggable/rotatable/scalable.

#### **2. Configure the Component**
Configure the following properties in the **Inspector Panel**:

**Gesture Type Toggles:**
- **Two Finger Drag (twoFingerDrag)** – Enable/disable two-finger rotation around Y-axis.
- **Hold Drag (holdDrag)** – Enable/disable hold-and-drag movement.
- **Pinch Scale (pinchScale)** – Enable/disable pinch-to-scale gestures.

**Ground Reference:**
- **Ground Entity (groundEntity)** – The ground plane entity for hold-drag raycasting.

**Gesture Settings:**
- **Rotation Factor (rotationFactor)** – Sensitivity of two-finger rotation (default: 3.0).
- **Drag Delay (dragDelay)** – Milliseconds to hold before drag activates (default: 300ms).
- **Min Scale (minScale)** – Minimum allowed scale (default: 0.3).
- **Max Scale (maxScale)** – Maximum allowed scale (default: 8.0).
- **Scale Factor (scaleFactor)** – Scaling sensitivity multiplier (default: 2.0).
- **Drag Smoothness (dragSmoothness)** – Smoothing factor for drag movement (default: 0.15).
- **Rotation Smoothness (rotationSmoothness)** – Smoothing factor for rotation interpolation (default: 0.12).

---

## How It Works

### **Cursor Tap to Place**
1. The **cursor follows** the ground using 8th Wall's native raycasting from the camera's forward direction, smoothly interpolating to its new position.
2. When the **user taps the screen**, the selected object is **placed** at the cursor's position.
3. If **growOnPlace** is enabled, the placed object **scales up** to its final size over time using the selected easing function.

### **Gesture Components**
1. **Hold-Drag:** Touch and hold an object to activate drag mode. The object lifts slightly and follows finger movement across the ground plane using raycasting. Release to drop smoothly back to the ground.
2. **Two-Finger Rotation:** Use two fingers and move horizontally to rotate the object around its Y-axis. Rotation is applied immediately for responsive feedback.
3. **Pinch-to-Scale:** Use two fingers to pinch in/out to scale the object. Scale is clamped between min/max values and applied immediately.
4. **State Machine:** The component uses a robust state machine with four states: `waiting`, `holdDrag`, `twoFinger`, and `dropping`.

---

## Tips & Best Practices

### **Cursor Tap to Place**
- **Hide the cursor entity** by default and only reveal it when needed.
- **Set the placed entity's default scale to zero** if using the grow animation.
- **Experiment with easing functions** to achieve different visual effects for object scaling.
- **Use a higher yHeight value** if your cursor needs to hover above the ground (e.g., for placing objects in mid-air).

### **Gesture Components**
- **Set up a proper ground entity** for hold-drag functionality - this should be a large plane that covers your interaction area.
- **Adjust dragDelay** based on your needs - shorter delays make drag more responsive but may conflict with other gestures.
- **Fine-tune dragSmoothness** - lower values (0.05-0.1) create smoother movement, higher values (0.2-0.3) create more responsive movement.
- **Set appropriate scale limits** - minScale prevents objects from disappearing, maxScale prevents them from becoming too large.
- **Test on actual devices** - gesture behavior can vary between desktop testing and mobile devices.
- **Consider gesture conflicts** - disable conflicting gestures if you have multiple interactive objects close together.

---

## Component Architecture

### **State Machine (Gesture Components)**
The gesture component uses a sophisticated state machine to handle different interaction modes:

- **waiting:** Initial state that listens for gesture starts and manages gesture detection.
- **holdDrag:** Active during hold-drag with smooth interpolation and raycasting for ground positioning.
- **twoFinger:** Handles rotation and scaling with immediate application for responsive feel.
- **dropping:** Smoothly animates objects back to ground after hold-drag ends.

### **Coordinate Systems**
Both components handle multiple coordinate system conversions:
- **Screen Coordinates:** Touch input (0-1 normalized)
- **NDC Coordinates:** Normalized Device Coordinates (-1 to 1)
- **World Coordinates:** 3D world positions for object placement

---

## Feedback

If you have any questions or need help integrating these interaction systems into your project, feel free to reach out!

Happy developing! 🚀

**Update History:**
- 02/25/25: Added rotation to make cursor and placed objects face the camera.
- 10/09/25: Updated to use 8th Wall's native raycasting system for better performance.
- 10/09/25: Added comprehensive gesture components with hold-drag, rotation, and scaling.