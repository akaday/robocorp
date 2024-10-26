# ⚡️ robocorp-actions

> **⚠️ Deprecation Notice:**
> Development of this package has moved and continues under a new PyPI package: [sema4ai-actions](https://pypi.org/project/sema4ai-actions/).
> You can follow the development in this [GitHub repository](https://github.com/Sema4AI/actions).
> The [robocorp-actions](https://pypi.org/project/robocorp-actions/) package will no longer receive updates, so please update your dependencies to ensure continued support and improvements.


A Python library designed to simplify the development of Python actions _(AI or otherwise)_ to be run with the [Robocorp Action Server](../action_server/).

## Getting started

If you have not setup Action Server already, see the [🏃‍♂️ Quickstart](https://github.com/Sema4AI/actions#quickstart) on how to do that.

Decorate your Python function with the `@action` decorator:

```py
from sema4ai.actions import action

@action
def sum_numbers(a: float, b: float) -> float:
    ...
```

**And your function is now an ⚡️Action!**

You can now run and debug your action by Starting Action Server with `action-server start` and accessing the UI at http://localhost:8080.

> Note: Action inputs and outputs support only `int`, `float`, `str` and `bool` types.

## Describe your action

For an action's purpose and usage to be understood by AI models _(and humans)_ it needs to be documented correctly.

To do that, use [Google Style Docstring](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings) to write a clear and concise description on what your action does and document the action inputs and expected output:

```py
@action
def get_weather_forecast(city: str, days: int, scale: str = "celsius") -> str:
    """
    Returns weather conditions forecast for a given city.

    Args:
        city (str): Target city to get the weather conditions for
        days: How many day forecast to return
        scale (str): Temperature scale to use, should be one of "celsius" or "fahrenheit"

    Returns:
        str: The requested weather conditions forecast
    """
    ...
```

> Tip: Experiment with and iterate the exact documentation wording to get more predictable results when using your action with AI apps.

---

### Consequential flag

You can explicitly provide the `is_consequential` flag for an action to mark it's operations as "must always prompt the user for confirmation before running" by [OpenAI GPTs](https://platform.openai.com/docs/actions) _(and possibly by other providers)_. If set to `False`, the user will be provided with an "always allow" feature.

```py
@action(is_consequential=True)
def get_weather_forecast(city: str, days: int, scale: str = "celsius") -> str:
```

### Execution

To get the full benefits of your actions, the suggested way to run them is using Action Server. But it's also possible to do that directly in command line by passing the named arguments:

```sh
python -m sema4ai.actions run -- --city=Helsinki --days=3
```

## Guides

- [Request headers](https://github.com/Sema4AI/actions/blob/master/actions/docs/guides/00-request.md)

## API Reference

Explore our [API](https://github.com/Sema4AI/actions/blob/master/actions/docs/api/README.md) for extensive documentation.

## Changelog

A list of releases and corresponding changes can be found in the [changelog](https://github.com/Sema4AI/actions/blob/master/actions/docs/CHANGELOG.md).
