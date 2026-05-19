# Keyforge Inserts

Burger Inserts is a project dedicated to help generating printable paper inserts that you can stick on deckboxes, or inside transparent deckboxes.
Current size includes Burger Token boxes.

## Download

Pre-built releases are available at: https://github.com/adnanmula/keyforge-inserts/releases

## Build the app

```
make build
make up
make install (only needed the first time)
```
Access the application at `http://localhost:4200`


## Package the app

```
make package_web
make package_win
make package_linux
```

Web output location: `dist/`
Win/Linux output location: `electron-app/out/burger-inserts-<platform>-<arch>/`

## Serve the static app

```
make package_web // Build the statics
make dist_build
make dist_up
```
