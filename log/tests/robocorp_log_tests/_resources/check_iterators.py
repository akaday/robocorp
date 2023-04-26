def call_in_iterator(value):
    x = value


def iterate_entries_in_project(steps: int):
    from robocorp_log_tests._resources.check_iterators_lib import iterator_in_library

    for step in range(steps):
        internal_value = step
        call_in_iterator(internal_value)
        for v in iterator_in_library(internal_value):
            yield v


def call_in_main(value):
    y = value


def main():
    for entry in iterate_entries_in_project(5):
        call_in_main(entry)


def yield_from():
    from robocorp_log_tests._resources.check_iterators_lib import iterator_in_library

    yield from iterator_in_library(3)
    yield from iterator_in_library(2)


def main_yield_from():
    for v in yield_from():
        val = v
