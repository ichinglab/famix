import FingerprintJS from '@fingerprintjs/fingerprintjs'

export async function getFingerprint() {
  const fpPromise = FingerprintJS.load()
  const fp = await fpPromise
  const result = await fp.get()
  return result.visitorId
}
