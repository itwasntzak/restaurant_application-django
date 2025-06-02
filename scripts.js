
import { prepListItemCollapsed } from "./preparation/prepListItemCollapsed.js";

document.body.append(
    prepListItemCollapsed('Pepperoni', 2, 1),
    prepListItemCollapsed('Ham', 1, 2),
    prepListItemCollapsed('Green Peppers', 0, 3),
);
