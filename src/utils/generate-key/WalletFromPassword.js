

import {
  bufferToHex, 
  sha3,
  toBuffer,
  addHexPrefix,
  privateToAddress,
  isValidPrivate
} from 'ethereumjs-util';





function recursive_repeated_sha3(msg, nMsgRepeats, nRecursiveSteps, bitCount) {
  nMsgRepeats = nMsgRepeats + 1;
  function inner_loop(msg, nRecursiveSteps) {
    if ( nRecursiveSteps === 0 ) {
      return msg;
    }
    else {
      msg = Array(nMsgRepeats).join(inner_loop(msg, nRecursiveSteps - 1));
      // return EthJS.Util.bufferToHex(EthJS.Util.sha3(msg)).slice(2);  // 2020.03.10 komnataDeveloper
      return bufferToHex(sha3(msg, parseInt(bitCount)) ).slice(2);
    }
  }
  return inner_loop(msg, nRecursiveSteps);
}

function hexstrToBuffer(hexstr) {
  // return EthJS.Util.toBuffer(EthJS.Util.addHexPrefix(hexstr)); // 2020.03.10 komnataDeveloper
  return toBuffer(addHexPrefix(hexstr));
}

function getAddress(priv) {
  return bufferToHex(privateToAddress(priv));
}

function showAddress(priv) {
  var priv = hexstrToBuffer(document.getElementById("priv").value);
  if (isValidPrivate(priv)) {
    document.getElementById("address").innerHTML = getAddress(priv);
    return true;
  } else {
    alert("Private key should be exactly 64 chars from {0-9, a-f, A-F} in the range: [1, fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140]");
    return false;
  }
}

export function makeWallet({
  hardness,
  email,
  password,
  bitCount

}) {
  // document.body.style.cursor = 'wait';
  // var hardness = Number(document.getElementById("hardness").value);
  // var email = document.getElementById("email").value;
  // var password = document.getElementById("password").value;
  const msg = email + password;
  const privKey = hexstrToBuffer(recursive_repeated_sha3(msg, hardness, hardness, bitCount));
  if (isValidPrivate(privKey)) {
    var address = getAddress(privKey);

    const testObject = {
      address,
      privateKey: bufferToHex(privKey).slice(2)
    }
    console.log(testObject);


    // document.getElementById("address1").innerHTML = address;
    // document.getElementById("privateKey").value = bufferToHex(privKey).slice(2);
    // qrcode.makeCode(address);
    // document.body.style.cursor = 'default';
    return true;
  } else {
    alert("This is very rare situation in which the key generated is outside of [1, fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140]. It is not valid key. You have to change any parameter.");
    document.body.style.cursor = 'default';
    return false;
  }
}