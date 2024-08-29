const donationSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        ngo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ngo",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Donation = mongoose.model("Donation", donationSchema);
