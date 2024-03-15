import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'sans-serif'
        }}>
            <h1 style={{ marginBottom: '50px' }}>플랫폼 이름</h1>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px'
            }}>
                <input
                    type="text"
                    placeholder="ID"
                    style={{
                        marginBottom: '10px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
                <div style={{
                    position: 'relative'
                }}>
                    <input
                        type="password"
                        placeholder="PW"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            paddingRight: '50px' // Make room for the eye icon
                        }}
                    />
                    <button
                        type="button"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        👁️
                    </button>
                </div>
                    <Link to = "/"
                        type="submit"
                        style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: 'black'
                        }}
                    >
                        로그인하기
                    </Link>
                <a href="#!" style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    color: '#0066cc',
                    textDecoration: 'none'
                }}>
                    ID/PW 찾기
                </a>
            </form>
        </div>
    );
};

export default LoginPage;
