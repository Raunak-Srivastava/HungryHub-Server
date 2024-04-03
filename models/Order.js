import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    shippingInfo: {
        hNo:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        pincode:{
            type: Number,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
    },
    orderItems: {
        hyderabadiBiryani:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        cheeseBurger:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        hamBurger:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        burgerWithFries:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        pizza:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        chickenKebab:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        springRolls:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        vegThali:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
        vegNoodles:{
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Online'],
        default: 'COD'
    },
    paymentInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
    },
    paidAt: Date,
    itemsPrice: {
        type: Number,
        default: 0,
    },
    taxPrice: {
        type: Number,
        default: 0,
    },
    shippingCharges: {
        type: Number,
        default: 0,
    },
    totalAmount: {
        type: Number,
        default: 0,
    },
    orderStatus: {
        type: String,
        enum: ["Preparing", "Shipped", "Delivered"],
        default: "Preparing",
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Order = mongoose.model("Order" , schema);