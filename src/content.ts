const mutObs = new MutationObserver((mutations) => {
    desktopPromotionItemRemover()
    mobilePromotionItemRemover()
})

mutObs.observe(document, { childList: true, subtree: true })

function desktopPromotionItemRemover() {
    const items = document.querySelectorAll(".product-item:not(.isPromoted)")
    for (const item of items) {
        if (item.querySelector(".rt-product-card-ad-tag")) {
            item.classList.add('isPromoted')
        }
    }
}

function mobilePromotionItemRemover() {
    const items = document.querySelectorAll(".rt-product-card:not(.isPromoted)")
    for (const item of items) {
        if (item.querySelector(".rt-product-card-ad-tag")) {
            item.classList.add('isPromoted')
        }
    }
}

