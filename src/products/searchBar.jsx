import {Input} from "../forms/input.jsx";
import {Checkbox} from "../forms/checkbox.jsx";

export function SearchBar({search, onSearchChange, showStockedOnly, onStockedOnlyChange}) {
    return <div>
        <div className="mb-3 hstack gap-3">
            <Input
                value={search}
                onChange={onSearchChange}
                placeholder="Rechercher ..."
                htmlFor="searchOnlyStocked"
            />
            <Checkbox
                className="ms-auto"
                checked={showStockedOnly}
                onChange={onStockedOnlyChange}
                label="Afficher que les produits en stock"
            />
        </div>
    </div>
}
