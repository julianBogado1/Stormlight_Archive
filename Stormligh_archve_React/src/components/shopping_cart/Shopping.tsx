import {Col, Row} from "react-bootstrap";
import { TopBar } from "../TopBar";
import '../../styles/shopping_styles/Shopping.css';
import storeItems from '../../data/items.json';
import { StoreItem } from "./StoreItem";

export const Shopping = () => {

    return (
        <>
            <TopBar banner={"Shopping Cart"} buttonString={"Back Home"} />
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
