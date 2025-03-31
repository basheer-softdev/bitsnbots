import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String }, // Optional if Google/Apple auth

    provider: {
      type: String,
      enum: ["email", "google", "apple"],
      default: "email",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    avatar: { type: String }, // profile pic (can be Google/Apple image or custom)

    // Blog/Video/Product Interaction
    likedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    savedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    likedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    savedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    savedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    // Recently viewed content
    recentlyViewed: [
      {
        contentId: mongoose.Schema.Types.ObjectId,
        contentType: {
          type: String,
          enum: ["Blog", "Video", "Product"],
        },
        viewedAt: { type: Date, default: Date.now },
      },
    ],

    // Order & Cart
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    // Notifications
    emailNotifications: { type: Boolean, default: true },
    notifyMeForStock: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    ],

    // Events
    registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],

    // Address (for shipping)
    addresses: [
      {
        fullName: String,
        phone: String,
        pincode: String,
        state: String,
        city: String,
        address: String,
        landmark: String,
        isDefault: { type: Boolean, default: false },
      },
    ],

    // Reviews
    reviews: [
      {
        itemType: { type: String, enum: ["Product", "Blog", "Video"] },
        itemId: mongoose.Schema.Types.ObjectId,
        rating: Number,
        comment: String,
      },
    ],

    // Meta
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    deviceInfo: {
      ip: String,
      userAgent: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
