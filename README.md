# Setting up
1. Clone repo :)
2. Install api and frontend dependendies. At the root of the project run the following:
    - `$ pip install -r color_service/requirements.txt`
    - cd to `frontend/` and run `$ yarn add`

# Running
Open two terminals one for the color service and the other for the frontend and run the following in their respective directories
1. color_service `$ python manage.py runserver` and open http://127.0.0.1:8000/color-swatch
2. frontend `$ yarn start` this should start up the frontend and it will be running at http://localhost:3000/

# Stage two
Adding more color spaces requires adding a the color space's new class to the api and adding a formatter function to the frontend to nicely format the value received from the api for dispay
## steps
### API
1. Add the a new color space class to views.py with the following attributes
    - A `color_space` class attribute with the name of the color space e.g. `color_space = "BRGB"`
    - A static method `generate` that returns a dictionary which MUST include a `type` key with its vaule being the `color_space` and any other arbitrary keys/value pairs for other attributes of the new color space e.g. `{"type": "BRGB", value: 3000}`
2. Add the newly created class to the `color_spaces` list in the `JsonView` class.

### Frontend
1. Add a formatter function e.g. `brgbFormatter` to the `ColorItem` component which returns a string of a supported CSS `background-color` attribute's value

2. Add this new function to the `formatters` object with its key being the name of the color space given in the API
