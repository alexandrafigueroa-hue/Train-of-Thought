EXPORT FROM ILLUSTRATOR:
1. assets/background.png = full 1920×1080 station artboard WITH Alexandra Station + Departures, but NO train.
2. assets/train.png = ONLY the train on transparency, WITH Train of Thought already printed on it.

GitHub structure:
index.html
departures.html
styles.css
script.js
assets/background.png
assets/train.png

To adjust train: styles.css > .train
--train-width
--train-left
--train-bottom

To adjust Departures clickable area: styles.css > .departures-hitbox
left / top / width / height
