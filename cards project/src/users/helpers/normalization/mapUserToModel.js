const mapUserToModel = (user) => {
    return {
        first: user.name?.first,
        middle: user.name?.middle,
        last: user.name?.last,
        phone: user.phone,
        email: user.email,
        password: user.password,
        url: user.image?.url,
        alt: user.image?.alt,
        state: user.address?.state,
        country: user.address?.country,
        city: user.address?.city,
        street: user.address?.street,
        zip: user.address?.zip,
        houseNumber: user.address?.houseNumber,
        isBusiness: user.isBusiness
    };
};

export default mapUserToModel;
