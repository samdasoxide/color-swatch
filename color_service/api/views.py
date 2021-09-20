from django.views import View
from django.http import JsonResponse
from random import randint, randrange


class RGB():
    """
    Color space in which models colors from their red, green and
    blue values.
    """

    color_space = "rgb"

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
