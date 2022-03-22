function applyLabel() {
  const threads = GmailApp.getInboxThreads();
  const myLabel = 'Jobs';
  const holder = [];
  GmailApp.getUserLabels().forEach((labelName) => {
    holder.push(labelName.getName());
  })
  // Logger.log(holder);
  let tempLabel;
  if (holder.includes(myLabel)) {
    tempLabel = GmailApp.getUserLabelByName(myLabel);
  } else {
    tempLabel = GmailApp.createLabel(myLabel);
  }
  // Logger.log(tempLabel);
  threads.forEach(
    (message) => {
      const firstMes = message.getFirstMessageSubject().toLowerCase();
      if (firstMes.includes('w2') || firstMes.includes('remote') || firstMes.includes('hiring') || firstMes.includes('job opportunity') || firstMes.includes('engineer')) {
        message.addLabel(tempLabel);
        message.moveToArchive();
        message.markRead();
        // Logger.log(firstMes);
      }
    }
  )
}
