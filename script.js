const cardList = document.getElementById("card");

function mutual_fund() {
  fetch(`https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.portfolio) {
        data.portfolio.forEach((portfolio) => {
          html += `
                    <div class="card_body">
                        <div class="card_name">${portfolio.scheme_name}</div>
                        <div class="card_value card_text">Current Value <span>$${(
                          Math.round(portfolio.current_value * 100) / 100
                        ).toFixed(0)}<span></div>
                        <div class="card_unit card_text">Units <span>${
                          portfolio.units
                        }<span></div>
                        <div class="card_number card_text">Folio Number <span>${
                          portfolio.folio_number
                        }<span></div>
                        <div class="card_nav card_text">Nav <span>${(
                          Math.round(portfolio.nav * 100) / 100
                        ).toFixed(0)}<span></div>
                    </div>
                `;
        });
      }

      cardList.innerHTML = html;
    });
}

mutual_fund();
