
export default function debugErrorNotifier(err, attempt) {
  console.log(`Attempt #${attempt} failed with error ${err}`);
}
