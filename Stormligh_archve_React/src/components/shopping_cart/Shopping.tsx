import {Col, Row} from "react-bootstrap";
import { TopBar } from "../TopBar";
import '../../styles/shopping_styles/Shopping.css';
// import storeItems from '../../data/items.json';
import { StoreItem, type StoreItemProps } from "./StoreItem";
import {supabase} from '../../persistence/Supabase';
import { useEffect, useState } from "react";

const Shopping = () => {


    const [fetchError, setFetchError] = useState<string | null>(null);
    const [items, setItems] = useState<StoreItemProps[]>([]);


    // this hook triggers once the component is rendered

    useEffect(
        () => {
            const fetchItems = async () => {
                const {data, error} = await supabase
                    .from('shop_items')
                    .select();

                if (error) {
                    setFetchError('Could not fetch the data from the shop_items table');
                    setItems([]);
                    console.log(error);
                }
                if (data) {
                    setItems(data as StoreItemProps[]);
                    setFetchError(null);
                }
            }

            fetchItems();
        }, [] //empty array to ensure it only runs once
    )

    return (
        <>
            <TopBar banner={"Shopping Cart"} buttonString={"Back Home"} />
            <div className="card-container">

                {fetchError && <p>{fetchError}</p>}

                <Row md={2} xs={1} lg={3} className="g-3">
                    {items.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />

                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export {Shopping};
