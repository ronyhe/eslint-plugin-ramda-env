## eslint-plugin-ramda-env

This plugin expose a `ramda` eslint environment which makes all keys in the Ramda `R` object global and read-only.
It was made to ease using eslint along with [steph](https://github.com/ronyhe/steph), but of course, you're welcome
to use it in other contexts.

### Implementation
This plugin has a peer dependency on Ramda.
It uses ramda to create an object where the keys are all the members of the Ramda `R` object and the values are `false`.
It then exports that object as an eslint environment named `ramda`

