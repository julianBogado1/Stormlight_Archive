import { Card } from "react-bootstrap";
import { useState } from "react";
import { WarningModal } from "./WarningModal";
import '../../styles/shopping_styles/Shopping.css';


export type StoreItemProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}

export function StoreItem({id, name, description, price, image_url}: StoreItemProps) {

    let [quantity, setQuantity]     = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

  const handleRemoveClick = () => setShowModal(true);

  const handleConfirm = () => {
    setQuantity(0);
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} height="50px" style={{ objectFit: "fill" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">${price.toFixed(2)}</span>
                    </Card.Title>
                    <Card.Text>{description}</Card.Text>

                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <button className="btn btn-primary w-100" onClick={() => setQuantity(1)}>
                                + Add to Cart
                            </button>
                        ) : (
                            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                    <button className="btn btn-secondary" onClick={() => setQuantity(quantity - 1)}>
                                        -
                                    </button>
                                    <span>
                                        <span className="fs-3">{quantity}</span> in cart
                                    </span>
                                    <button className="btn btn-secondary" onClick={() => setQuantity(quantity + 1)}>
                                        +
                                    </button>
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={handleRemoveClick}>
                                    Remove
                                </button>
                            </div>
                        )}
                    </div>
                </Card.Body>

                {/* confirmation modal */}
                <WarningModal
                    isOpen={showModal}
                    title="Clear Cart"
                    message="Are you sure you want to clear the cart?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            </Card>
        </div>
  );
}