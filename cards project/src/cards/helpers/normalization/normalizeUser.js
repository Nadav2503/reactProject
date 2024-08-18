function normalizeUser(user) {
    return {
        name: {
            first: user.first || "",
            middle: user.middle || "",
            last: user.last || "",
        },
        phone: user.phone || "",
        email: user.email || "",
        password: user.password || "",
        image: {
            url: user.url || "",
            alt: user.alt || "",
        },
        address: {
            state: user.state || "",
            country: user.country || "",
            city: user.city || "",
            street: user.street || "",
            houseNumber: user.houseNumber || 0,
            zip: user.zip || 0,
        },
        isBusiness: user.isBusiness || false,
    };
}

function normalizeCard(card) {
    return {
        title: card.title || "",
        subtitle: card.subtitle || "",
        description: card.description || "",
        phone: card.phone || "",
        email: card.email || "",
        web: card.webUrl || "",
        image: {
            url: card.imageUrl || "",
            alt: card.imageAlt || "",
        },
        address: {
            state: card.state || "",
            country: card.country || "",
            city: card.city || "",
            street: card.street || "",
            houseNumber: card.houseNumber || 0,
            zip: card.zip || 0,
        },
    };
}

export { normalizeUser, normalizeCard };