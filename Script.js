 const plansData = {
    jio: [
        { plan: "₹239", discounted: "₹95.6", benefits: "1.5GB/Day, Unlimited Calls, 100 SMS/Day" },
        { plan: "₹299", discounted: "₹119.6", benefits: "2GB/Day, Unlimited Calls, 100 SMS/Day" }
    ],
    airtel: [
        { plan: "₹249", discounted: "₹99.6", benefits: "1.5GB/Day, Unlimited Calls, 100 SMS/Day" },
        { plan: "₹399", discounted: "₹159.6", benefits: "3GB/Day, Unlimited Calls, 100 SMS/Day" }
    ],
    vi: [
        { plan: "₹199", discounted: "₹79.6", benefits: "1GB/Day, Unlimited Calls, 100 SMS/Day" },
        { plan: "₹299", discounted: "₹119.6", benefits: "2GB/Day, Unlimited Calls, 100 SMS/Day" }
    ]
};

function showPlans() {
    const operator = document.getElementById("operator").value;
    const plansContainer = document.getElementById("plans");
    plansContainer.innerHTML = ""; // Clear previous plans

    if (operator && plansData[operator]) {
        plansData[operator].forEach(plan => {
            const planDiv = document.createElement("div");
            planDiv.className = "plan";
            planDiv.innerHTML = `
                <h3>Plan: ${plan.plan}</h3>
                <p>Discounted Price: ${plan.discounted}</p>
                <p>Benefits: ${plan.benefits}</p>
                <button onclick="makePayment('${plan.discounted}')">Recharge Now</button>
            `;
            plansContainer.appendChild(planDiv);
        });
    }
}

function makePayment(amount) {
    alert(`Redirecting to payment for ${amount}...`);
}
