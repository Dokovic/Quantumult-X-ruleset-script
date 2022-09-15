let obj=JSON.parse($response.body);

obj.flag=0;
obj.content=" ";

$done({body: JSON.stringify(obj)})
