---
title: Magnified Dock
reference: BlueprintsMagnifiedDock
---



Recreation of the magnification effect from the Mac OS dock, inspired by [Build UI](https://buildui.com/recipes/magnified-dock).

Althought Vue doesn't have the popular `Framer-motion` library, but we by leveraging `Vueuse`, and `Vueuse/motion`, we can achieve the same effect just as well. 

We need to create 2 component, 

First, a `Dock` component that would hold all the AppIcon. 
codegen{src="website/components/Blueprints/MagnifiedDock/index.vue" lang="vue"}


Secondly, we will create the `AppIcon` that will react to the mouseX position and adjust the size.
codegen{src="website/components/Blueprints/MagnifiedDock/AppIcon.vue" lang="vue"}
