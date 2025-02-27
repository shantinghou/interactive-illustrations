# Interactive-Illustrations Usage Instructions

## Multi-eye Interaction
The **MultiEyeInteraction** component allows multiple eyes within an SVG to follow the user's cursor. Customize the behavior by adjusting animation speed and responsiveness.
📄 See example: [`./examples/ExampleEyeInteraction.tsx`](./examples/ExampleEyeInteraction.tsx)

### Props:
- src (type: React.ReactNode), Required
- speed (type: number), controls animation speed (lower is slower)
- width (type: string), Width of the SVG container.
- height (type: string), Height of the SVG container.
- responsiveness (type: number), Determines how close the mouse has to be for the eyes follow the cursor.

### SVG Structure
For MultiEyeInteraction to work, your SVG must include specific class names:
**.eye** - Wraps each eye.
**.bounding** - The outer boundary of the eye (the sclera).
**.moving** - The moving part of the eye (the pupil).

-------------

## Mouse Follow 
A component that makes an SVG smoothly follow the mouse cursor.
📄 See example: [`./examples/ExampleMouseFollow.tsx`](./examples/ExampleMouseFollow.tsx)

### Props:
- src (type: React.ReactNode), **Required**
- size (type: number), Scaling factor for the SVG size.
- opacity (type: number), Controls how visible the SVG is (0 = fully transparent, 1 = fully visible)
- delay (type: number), Defines how smoothly the SVG follows the cursor (lower = faster).
- ease (type: string), The easing function applied to the animation. See GSAP easing options.