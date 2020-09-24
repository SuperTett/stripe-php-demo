var stripe = Stripe("pk_test_51HPtIGDKDCXaxcBlJLcRv7pIEBgguSbC65MS22JaZ1Dtxb5JtGAKagSgqMDMxfZ3xzw8UYUrYXbgwBBXUC87sxK300PRu67CJ6");

fetch("/create.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(purchase)
})
