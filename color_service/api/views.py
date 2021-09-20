from django.views import View
from django.http import JsonResponse
from random import randint, randrange


class RGB():
    """
    Color space in which models colors from their red, green and
    blue values.
    """

    color_space = "rgb"

    def __init__(self, red, green, blue):
        self.red = self._validate_rgb_value(red)
        self.green = self._validate_rgb_value(green)
        self.blue = self._validate_rgb_value(blue)

    def _validate_rgb_value(self, value):
        """
        Validates that each RGB values is within range.
        """
        if int(value) < 0 and int(value) > 255:
            raise ValueError("RGB values must be between 0 and 255")
        return value

    @staticmethod
    def generate():
        return {
            "type": RGB.color_space,
            "red": randint(0, 255),
            "green": randint(0, 255),
            "blue": randint(0, 255)
        }


class HSL():
    """
    An alternative representation of the RGB color space which
    colors are modeled from their hue, saturation, lightness.
    """
    color_space = "hsl"

    def __init__(self, hue, saturation, lightness):
        self.hue = hue
        self.saturation = saturation
        self.lightness = lightness

    def _validate_hue(self, hue):
        """
        Validates the hue of the HSL color space.
        """

        if int(hue) < 0 and int(hue) > 360:
            raise ValueError("The hue must be between 0 and 360")
        return hue

    def _validate_saturation_lightness(self, value):
        """
        Validates the saturation and lightness of the HSL color space.
        """
        if int(value) < 0 and int(value) > 360:
            raise ValueError(
                "Saturation and Lightness must be values between 0 and 360"
            )
        return(value)

    @staticmethod
    def generate():
        return {
            "type": HSL.color_space,
            "hue": randint(0, 360),
            "saturation": randint(0, 100),
            "lightness": randint(0, 100)
        }


class JsonView(View):

    def get(self, request):

        color_spaces = [RGB, HSL]
        response = []

        for _ in range(5):
            # picks a random color space
            random_space = color_spaces[randrange(len(color_spaces))]

            color_space_values = random_space.generate()
            response.append(color_space_values)

        return JsonResponse(response, safe=False)
