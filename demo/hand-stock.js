let handStock;

function initHandStock() {
    handStock = new HandStock(cardsManager, document.getElementById('hand-stock'), {
    });

    // add cards
    handStock.addCards([
        { id: getCardId(), type: 3, type_arg: 2, location: 'table', location_arg: 0 },
        { id: getCardId(), type: 1, type_arg: 5, location: 'table', location_arg: 0 },
        { id: getCardId(), type: 3, type_arg: 2, location: 'table', location_arg: 0 },
        { id: getCardId(), type: 4, type_arg: 5, location: 'table', location_arg: 0 },
        { id: getCardId(), type: 3, type_arg: 2, location: 'table', location_arg: 0 },
        { id: getCardId(), type: 4, type_arg: 6, location: 'table', location_arg: 0 },
    ]);
}
