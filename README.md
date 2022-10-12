University List app related to video games

---

## Local API connection troubleshooting

The app might fail to add universities to the favorites list when running on an Android emulator.

If the terminal returns this message when the `Add to favorites` button is pressed:

```sh
LOG  Server error:  NETWORK_ERROR
```

Since the favorites API client's base URL is:

```
http://localhost:9000/api
```

### Follow these steps:

#### Run this command to get the list of connected devices:

```sh
$ adb devices
```

The list should look like this:

```sh
List of devices attached
emulator-5554   device
```

#### Use this command to map your computer's local server port to the same port in your device or emulator

```sh
$ adb -s emulator-5554 reverse tcp:9000 tcp:9000
```

#### Try to add an university to the list once again
