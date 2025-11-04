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
make package:win
make package:linux
```

Output location: `electron-out/burger-inserts-<platform>-<arch>/`
