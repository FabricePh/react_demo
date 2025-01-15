//https://grafikart.fr/tutoriels/tp-react-liste-produit-1320

import {SearchBar} from "../products/searchBar.jsx";
import {ProductTable} from "../products/productTable.jsx";
import {PRODUCTS} from "../products/data.js";
import {useState} from "react";

export function Products() {
    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockedOnly && !product.stocked) {
            return false;
        }
        else if(search.toLocaleLowerCase() && !product.name.toLocaleLowerCase().includes(search)){
            return false;
        }

        return true;
    })

    return <div>
        <h2>Produits</h2>
        <SearchBar search={search} onSearchChange={setSearch} showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly}/>
        <ProductTable products={visibleProducts} />
    </div>
}
