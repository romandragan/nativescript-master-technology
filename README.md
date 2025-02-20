[![npm](https://img.shields.io/npm/v/nativescript-master-technology-updated.svg)](https://www.npmjs.com/package/nativescript-master-technology-updated)
[![npm](https://img.shields.io/npm/l/nativescript-master-technology-updated.svg)](https://www.npmjs.com/package/nativescript-master-technology-updated)
[![npm](https://img.shields.io/npm/dt/nativescript-master-technology-updated.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-master-technology-updated)

# nativescript-master-technology-updated
A library of generic functions that are useful in NativeScript

## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me at [http://nativescript.tools](http://nativescript.tools).

I also do contract work; so if you have a module you want built for NativeScript (or any other software projects) feel free to contact me [nathan@master-technology.com](mailto://nathan@master-technology.com).

[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?style=plastic)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HN8DDMWVGBNQL&lc=US&item_name=Nathanael%20Anderson&item_number=nativescript%2dmastertechnology&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3ax%3aNonHosted)
[![Patreon](https://img.shields.io/badge/Pledge-Patreon-brightgreen.svg?style=plastic)](https://www.patreon.com/NathanaelA)

## Updates

Please feel free to fork this repo and add other utility functions!!!


## Installation 
Supports all NativeScript versions from 2.x till 5.x
  
tns plugin add nativescript-master-technology-updated

## Notes:

The first release of this library had a ton of DOM routines, these have been moved to there own plugin called 'nativescript-dom'


## Usage

To use the  module you must first `require()` it:

```js
require( "nativescript-master-technology-updated" );
```

 All routines are global; you do not need to keep a reference to the library.

 If you get TypeScript complaining about process not being defined, then put `/// <reference path="./node_modules/nativescript-master-technology-updated/references.d.ts" />` in your `references.d.ts`.

### Methods

#### setImmediate(<function>);
Push this task off to the next available time slice.

### clearImmediate(id)
Clears an timer scheduled via setImmediate...

#### performance.now()
Returns the current time stamp in NS or MS (depends on the platform)

#### process.restart()
IOS will tell the user they need to restart; and then exit.  (Apple doesn't appear to have any "restart" app ability)
Android will quit and restart the app.

#### process.exit()
Exit the application

#### process.isDebug()
Detects if you are running the debug version of the code on Android, on ios it returns Process.isEmulator()

#### process.isEmulator()
Detects if you are running on an emulator

#### process.processMessages()
A Syncronous method to cause IOS & Android to handle their message loops.  

#### console.keys()
Prints out all the keys in the object

*Optionally*: You can pass `true` as second argument to also print the value:

```
var data = {
  id: 1,
  name: 'Nathan'
};
console.keys(data, true);

// id:  1
// name:  Nathan

```

### Breaking Changes
Renamed Performance.now to performance.now -- not sure why I messed up the name in the first place; but the proper name for compatibility sake is "performance.now()"...
