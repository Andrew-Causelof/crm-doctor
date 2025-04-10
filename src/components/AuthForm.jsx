import React, { useState } from 'react';
import {API_BASE_URL} from '../config';

const AuthForm = () => {
    const [email, setEmail] = useState(''); // @TODO если необходимо забрать из куков или локалстораджа
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [restore, setRestore] = useState(true);

    const handleSubmitAuth = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            setError(true);
            return;
        }
        setError(false); // сбрасываем ошибку
    
        try {
            const response = await fetch(`/api/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            if (result.status === 'success') {
                // Обновляем страницу, редирект заложен на сервере Bitrix (в шаблоне)
                window.location.reload();
            } else {
                setError(true);
                // Тут можно показать модалку или сообщение об ошибке
                alert(result.message);
            }
        } catch (error) {
            setError(true);
            alert('Ошибка при отправке запроса, попробуйте позже.');
            console.error('Login error:', error);
        }
    };
    

    const handleSubmitRestore = async (e) => {
        e.preventDefault();
    
        if (!email) {
            setError(true);
            return;
        }
        setError(false);
    
        try {
            const response = await fetch(`/api/user/restore`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
    
            const result = await response.json();
    
            if (result.status === 'success') {
                alert('На вашу почту отправлено письмо с новым паролем');
                setRestore(false); // переключаемся обратно на форму логина
            } else {
                setError(true);
                alert(result.message); // сообщение об ошибке, например "Пользователь не найден"
            }
        } catch (error) {
            setError(true);
            alert('Ошибка при отправке запроса, попробуйте позже.');
            console.error('Restore error:', error);
        }
    };

    return (
        <>
        <div className={`page page-auth ${restore ? 'hide' : ''} `}>
            <section className="auth gradient">
                <div className="container">
                    <form className="auth_form form" onSubmit={handleSubmitAuth}>
                        <div className="auth_form_title">
                            <span>Вход в аккаунт</span>
                        </div>
                        <div className="auth_form_controls">
                            <div className="control">
                                <label className="control_title" htmlFor="mail">Электронная почта</label>
                                <input
                                    className={error && !email ? 'err' : 'ok'}
                                    id="mail"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите ваш e-mail"
                                    required
                                    autoComplete="username"
                                />
                            </div>
                            <div className="control">
                                <label className="control_title" htmlFor="password">Пароль</label>
                                <input
                                    className={error && !password ? 'err' : ''}
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Введите пароль..."
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                            <div className="auth_form_control">
                                <button className="form_btn btn btn-main btn-fw" type="submit">Войти</button>
                            </div>
                            <div className="auth_form_control auth_form_control-reset">
                                <p>Забыли пароль? <a onClick={() => setRestore(true)}>Восстановить</a></p>
                            </div>
                        </div>
                        <div className="auth_form_footer">
                            <a href="#">SL-Клиника</a>
                            <p>Клиника консервативного лечения заболеваний позвоночника и суставов</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>

        <div className={`page page-auth ${restore ? '' : 'hide'} `}>
        <section className="auth gradient auth-restore">
            <div className="container">
                <form className="auth_form form" onSubmit={handleSubmitRestore}>
                    <div className="auth_form_title">
                        <span>Восстановить пароль</span>
                    </div>
                    <div className="auth_form_controls">
                        <div className="control">
                            <label className="control_title" htmlFor="mail_resore">Электронная почта</label>
                            <input
                                className={error && !email ? 'err' : 'ok'}
                                id="mail_resore"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Введите ваш e-mail"
                                required
                                autoComplete="username"
                            />
                        </div>

                        <div className="auth_form_control">
                            <button className="form_btn btn btn-main btn-fw" type="submit" >
                                Восстановить
                            </button>
                        </div>
                        <div className="auth_form_control auth_form_control-reset">
                                <p><a  onClick={() => setRestore(false)} >Вход в аккаунт</a></p>
                        </div>
                    </div>
                    <div className="auth_form_footer">
                        <a href="#">SL-Клиника</a>
                        <p>Клиника консервативного лечения заболеваний позвоночника и суставов</p>
                    </div>
                </form>
            </div>
        </section>
        </div>
        </>

    );
};

export default AuthForm;
