## @hamgom95/objtools

Object helper methods.

### API Documentation

#### Functions

<dl>
<dt><a href="#setDefault">setDefault(key, defaultValue)</a> ⇒</dt>
<dd><p>Get value for key in object or set default.</p>
</dd>
<dt><a href="#getPath">getPath(...levels)</a> ⇒</dt>
<dd><p>Get value at path in object.</p>
</dd>
<dt><a href="#setPath">setPath(value, ...levels)</a> ⇒</dt>
<dd><p>Set value at path in object.</p>
</dd>
<dt><a href="#register">register(cls)</a> ⇒</dt>
<dd><p>Register object methods to cls.</p>
</dd>
</dl>

<a name="setDefault"></a>

#### setDefault(key, defaultValue) ⇒
Get value for key in object or set default.

**Kind**: global function  
**Returns**: Value for property in object.  

| Param | Description |
| --- | --- |
| key | Key in object. |
| defaultValue | Default value to set if property not found. |

<a name="getPath"></a>

#### getPath(...levels) ⇒
Get value at path in object.

**Kind**: global function  
**Returns**: Value at path.  

| Param | Description |
| --- | --- |
| ...levels | Path in object. |

<a name="setPath"></a>

#### setPath(value, ...levels) ⇒
Set value at path in object.

**Kind**: global function  
**Returns**: Set value at path.  

| Param | Description |
| --- | --- |
| value | Value to set at path. |
| ...levels | Path in object. |

<a name="register"></a>

#### register(cls) ⇒
Register object methods to cls.

**Kind**: global function  
**Returns**: Mixed in class.  

| Param | Description |
| --- | --- |
| cls | Class to add methods to. |

