#!/usr/bin/env node
const fs = require('fs')

const timestamp = new Date().toISOString().slice(0, 19).replace(/[^0-9]/g, "")

fs.openSync(`src/main/resources/db/migration/V${timestamp}__${process.argv[2]}.sql`, 'w')