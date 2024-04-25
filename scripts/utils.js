// imrpimir en consola una conuslta fetch

async function _function(_url, _token = null, _method='GET', _body = null) {

  const options = {
    method: _method,
    headers: { "Content-Type": "application/json" }
  };
  
  if (_token) { options.headers["Authorization"] = "Bearer " + _token; }
  if (_body) { options.body = JSON.stringify(_body); }

  try {
    const response = await fetch(_url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function _main() {
  const data = await _function("http://localhost:8000/api/v1/users");
  console.log(data);
}

_main();