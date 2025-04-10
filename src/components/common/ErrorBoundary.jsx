import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes для типизации

// ErrorBoundary - класс для ловли ошибок
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Состояние для отслеживания ошибки
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы следующий рендер показал fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Логируем ошибку (можно отправить на сервер или в лог-файл)
    this.setState({ errorMessage: error.message });
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Рендерим fallback UI
      return this.props.fallback || <p>Что-то пошло не так...</p>;
    }

    return this.props.children; // Если ошибки нет, рендерим дочерний компонент
  }
}

ErrorBoundary.propTypes = {
    fallback: PropTypes.node,
  };
  
  ErrorBoundary.defaultProps = {
    fallback: <p>Что-то пошло не так...</p>,
  };

export default ErrorBoundary;
