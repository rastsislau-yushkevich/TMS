import React from "react";

enum Themes {
    LIGHT = "light",
    DARK = "dark"
}

enum Tabs {
    ALL = "all",
    FAVOURITES = "favourites",
    POPULAR = "popular"
}

const LIMITS = [
    5, 10, 15, 20
]

export { Themes, Tabs, LIMITS }