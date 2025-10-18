#  Project : Drum Machine

##  About the Project

**Objective** : Build an interactive drum machine using React that responds to both mouse clicks and keyboard input.

##  User Stories

- User Story #1: I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.
- User Story #2: Within `#drum-machine` I can see an element with a corresponding `id="display"`.
- User Story #3: Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique `id` that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.
- User Story #4: Within each `.drum-pad`, there should be an HTML5 `<audio>` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an `id` corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).
- User Story #5: When I click on a `.drum-pad` element, the audio clip contained in its child audio element should be triggered.
- User Story #6: When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child audio element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).
- User Story #7: When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

## Langages and Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat)

##  Installation

```bash
git clone https://github.com/m-amroune/drum-machine.git
cd drum-machine
npm install
npm run dev
