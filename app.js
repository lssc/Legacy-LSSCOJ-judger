const { OJ_URL, JUDGER_ID, TOKEN } = process.env;

function getPendingSubmission() {
  console.log('Checking pending submission');
}

setInterval(getPendingSubmission, 1000);
