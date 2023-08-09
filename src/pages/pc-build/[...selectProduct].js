import RootLayout from '@/layout/RootLayout';
import { useGetProductsByCategoryQuery } from '@/redux/api/api';
import { Button, Card, Rate, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPc } from '@/redux/api/pcSlice';
const SelectProduct = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    let query = null
    if (router.query?.selectProduct?.includes('motherboard')) {
        query = "Motherboard"
    } else if (router.query?.selectProduct?.includes('processor')) {
        query = "Processor"
    }
    else if (router.query?.selectProduct?.includes('ram')) {
        query = "RAM"
    }
    else if (router.query?.selectProduct?.includes('power-supply')) {
        query = "Power Supply Unit"
    }
    else if (router.query?.selectProduct?.includes('storage')) {
        query = "Storage Device"
    }
    else if (router.query?.selectProduct?.includes('monitor')) {
        query = "Monitor"
    }
    else if (router.query?.selectProduct?.includes('others')) {
        query = "Others"
    }

    const { data } = useGetProductsByCategoryQuery(query)
    const handleSelectProduct = (product) => {
        console.log("🚀 ~ file: [...selectProduct].js:35 ~ handleSelectProduct ~ category:", product)
        const data = {
            category: product.category,
            image: product.image,
            id: product._id,
            productName: product.productName,
            price: product.price
        }
        dispatch(setPc(data))
        router.push("/pc-build");
    }
    return (
        <div style={{ marginTop: "40px" }}>
            <div>
                <p style={{ textAlign: "center", fontSize: "20px" }}>Select Product Here</p>
            </div>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: 'center' }}>
                <div>


                    {
                        data?.data?.map((product) => (
                            <Row style={{ marginTop: "20px" }} key={product?._id}>
                                <Card style={{
                                    width: 500,
                                }}>
                                    <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "space-around" }}>
                                        <img style={{ padding: "5px", height: "100px", objectFit: "contain" }} src={product.image} alt="product-image"></img><br />
                                        <div>
                                            <p style={{ fontWeight: "600" }}>{product.productName}</p>
                                            <ul>
                                                <p>
                                                    {product?.category}
                                                </p>
                                                <p>
                                                    {product?.status}
                                                </p>
                                                <p>
                                                    <Rate disabled defaultValue={product?.rating} />

                                                </p>
                                                {/* {
                                                    product?.keyFeatures.specification &&
                                                    <li>Specification: {product?.keyFeatures.specification}</li>
                                                }
                                                {
                                                    product?.keyFeatures.brand &&
                                                    <li>Brand: {product?.keyFeatures.brand}</li>
                                                }
                                                {
                                                    product?.keyFeatures.maxBoostClock &&
                                                    <li>Max Boost Clock: {product?.keyFeatures.maxBoostClock}</li>
                                                }
                                                {
                                                    product?.keyFeatures.Ethernet
                                                    &&
                                                    <li>Ethernet: {product?.keyFeatures.Ethernet
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.memorySupport
                                                    &&
                                                    <li>Memory Support: {product?.keyFeatures.memorySupport
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.USBPorts
                                                    &&
                                                    <li>USB Ports: {product?.keyFeatures.USBPorts
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.capacity
                                                    &&
                                                    <li>Capacity: {product?.keyFeatures.capacity
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.speed
                                                    &&
                                                    <li>Speed: {product?.keyFeatures.speed
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.wattage
                                                    &&
                                                    <li>Wattage: {product?.keyFeatures.wattage
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.efficiency
                                                    &&
                                                    <li>Efficiency: {product?.keyFeatures.efficiency
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.resolution
                                                    &&
                                                    <li>Resolution: {product?.keyFeatures.resolution
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.refreshRate
                                                    &&
                                                    <li>Refresh Rate: {product?.keyFeatures.refreshRate
                                                    }</li>
                                                }
                                                {
                                                    product?.keyFeatures.panelType
                                                    &&
                                                    <li>Panel Type: {product?.keyFeatures.panelType
                                                    }</li>
                                                } */}
                                            </ul>
                                        </div>
                                        <div>
                                            <p style={{ paddingBottom: "10px", fontWeight: "600" }}>${product.price}</p>
                                            <Button onClick={() => handleSelectProduct(product)}>Select</Button>
                                        </div>
                                    </div>


                                </Card>
                            </Row>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectProduct;

SelectProduct.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}