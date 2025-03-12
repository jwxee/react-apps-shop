import React, { useState } from "react";
import { useProducts } from "../context/productContext";

const fakeReviews = [
    { id: 1, user: "Иван", text: "0", rating: 5, productId: 1 },
    { id: 2, user: "Мария", text: "1", rating: 4, productId: 2 },
    { id: 3, user: "Алексей", text: "2", rating: 3, productId: 3 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div style={{ color: "gold", fontSize: "16px" }}>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
    </div>
);

const ReviewsPage: React.FC = () => {
    const { products } = useProducts();
    const [reviews] = useState(fakeReviews);

    return (
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Отзывы</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                {reviews.map((review) => {
                    const product = products.find((p) => p.id === review.productId);

                    if (!product) return null;

                    return (
                        <div
                            key={review.id}
                            style={{
                                background: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                textAlign: "center",
                                paddingBottom: "10px",
                            }}
                        >
                            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <div style={{ padding: "10px" }}>
                                <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{product.name}</h3>
                                <p style={{ fontSize: "14px", color: "#777" }}>Размер: {product.sizes?.join(", ") || "Не указан"}</p>
                                <p style={{ fontWeight: "bold", fontSize: "16px", color: "#007BFF" }}>${product.price}</p>
                                <StarRating rating={review.rating} />
                                <p style={{ fontSize: "14px", color: "#555", marginTop: "5px" }}>{review.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ReviewsPage;
