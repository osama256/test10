const mongoose = require('mongoose')
const A1 = mongoose.model('A1')
const A2 = mongoose.model('A2')
const A3 = mongoose.model('A3')
const A4 = mongoose.model('A4')
const A5 = mongoose.model('A5')
const B1 = mongoose.model('B1')
const B2 = mongoose.model('B2')
const C1 = mongoose.model('C1')
const C2 = mongoose.model('C2')
const C3 = mongoose.model('C3')
const D1 = mongoose.model('D1')
const D2 = mongoose.model('D2')
const E1 = mongoose.model('E1')
const E2 = mongoose.model('E2')
const E3 = mongoose.model('E3')
const F = mongoose.model('F')
const G = mongoose.model('G')
const H = mongoose.model('H')
const I = mongoose.model('I')
const J1 = mongoose.model('J1')
const J2 = mongoose.model('J2')
const J3 = mongoose.model('J3')
const K1 = mongoose.model('K1')
const K2 = mongoose.model('K2')
const L1 = mongoose.model('L1')
const L2 = mongoose.model('L2')
const L3 = mongoose.model('L3')
const M1 = mongoose.model('M1')
const M2 = mongoose.model('M2')
const M3 = mongoose.model('M3')
const N = mongoose.model('N')
const O = mongoose.model('O')
const P = mongoose.model('P')
const Q = mongoose.model('Q')
const R1 = mongoose.model('R1')
const R2 = mongoose.model('R2')
const S1 = mongoose.model('S1')
const S2 = mongoose.model('S2')
const T = mongoose.model('T')
const U = mongoose.model('U')
const V = mongoose.model('V')
const W = mongoose.model('W')
const X = mongoose.model('X')
const Y = mongoose.model('Y')
const Z = mongoose.model('Z')
const OTHER = mongoose.model('OTHER')
module.exports = (usr) => {


    if (usr.match(/^a[a-e]/i)) {
        return A1
    }
    else if (usr.match(/^a[f-j]/i)) {
        return A2
    }
    else if (usr.match(/^a[k-o]/i)) {
        return A3
    }
    else if (usr.match(/^a[p-t]/i)) {
        return A4
    }
    else if (usr.match(/^a[u-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return A5
    }

    //B
    else if (usr.match(/^b[a-l]/i)) {
        return B1
    }
    else if (usr.match(/^b[m-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return B2
    }

    // C
    else if (usr.match(/^c[a-i]/i)) {
        return C1
    }
    else if (usr.match(/^c[j-r]/i)) {
        return C2
    }
    else if (usr.match(/^c[k-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return C3
    }

    // D
    else if (usr.match(/^d[a-l]/i)) {
        return D1
    }
    else if (usr.match(/^d[m-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return D2
    }

    // E
    else if (usr.match(/^e[a-i]/i)) {
        return E1
    }
    else if (usr.match(/^e[j-r]/i)) {
        return E2
    }
    else if (usr.match(/^e[k-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return E3
    }

    // F
    else if (usr.match(/^f[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return F
    }
    // G
    else if (usr.match(/^g[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return G
    }
    // F
    else if (usr.match(/^h[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return H
    }
    // F
    else if (usr.match(/^i[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return I
    }

    // J
    else if (usr.match(/^j[a-i]/i)) {
        return J1
    }
    else if (usr.match(/^j[j-r]/i)) {
        return J2
    }
    else if (usr.match(/^j[k-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return J3
    }

    // K
    else if (usr.match(/^k[a-l]/i)) {
        return K1
    }
    else if (usr.match(/^k[m-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return K2
    }

    // L
    else if (usr.match(/^l[a-i]/i)) {
        return L1
    }
    else if (usr.match(/^l[j-r]/i)) {
        return L2
    }
    else if (usr.match(/^l[k-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return L3
    }

    // M
    else if (usr.match(/^m[a-i]/i)) {
        return M1
    }
    else if (usr.match(/^m[j-r]/i)) {
        return M2
    }
    else if (usr.match(/^m[k-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return M3
    }

    // N
    else if (usr.match(/^n[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return N
    }

    // O
    else if (usr.match(/^o[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return O
    }

    // P
    else if (usr.match(/^p[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return P
    }

    // Q
    else if (usr.match(/^q[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return Q
    }

    // R
    else if (usr.match(/^r[a-l]/i)) {
        return R1
    }
    else if (usr.match(/^r[m-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return R2
    }

    // S
    else if (usr.match(/^s[a-l]/i)) {
        return S1
    }
    else if (usr.match(/^s[m-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return S2
    }

    // T
    else if (usr.match(/^t[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return T
    }

    // U
    else if (usr.match(/^[u_][a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        
        return U
        // return mongoose.model('U')
    }

    // V
    else if (usr.match(/^v[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return V
    }

    // W
    else if (usr.match(/^w[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return W
    }

    // X
    else if (usr.match(/^x[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return X
    }

    // Y
    else if (usr.match(/^y[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return Y
    }

    // Z
    else if (usr.match(/^z[a-z0-9!@#\$%\^\&*\)\(+=._-]/gi)) {
        return Z
    }

    else {
        return OTHER
        // return res.status(410).send({error:"invalid userName",userName})
    }
}