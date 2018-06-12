What is scope? Your explanation should include the idea of global vs. local scope.

Scope is defining whether variables are local or global. Local variables live and destroyed within the function they are named in. Global variables are defined outside of a function, and can be accessed anywhere. 



Why are global variables avoided?

Since global variables can be accessed anywhere, unexpected bugs might occur when functions utilize these variables in an unexpected way. Global variables are indeterminate and can lead to bugs that are hard to catch, while determinate code is best practice it does not change no matter what you input. 



Explain JavaScript's strict mode

It is best practice to always use strict mode, as you will then be unable to use implicitly declared variables. This keeps your code determinate and makes it easier to avoid errors, and easier to debug.

What are side effects, and what is a pure function?