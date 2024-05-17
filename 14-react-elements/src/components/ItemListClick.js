import React, { Component } from 'react';

class ItemListClick extends Component {
  // Método para lidar com o clique no item da lista
  handleItemClick = (item) => {
    alert(`Nome: ${item.name}\nDescrição: ${item.description}`);
  };

  render() {
    // Definindo os 10 itens da lista como objetos
    const items = [
      { id: 1, name: 'Item 1', description: 'Descrição do Item 1' },
      { id: 2, name: 'Item 2', description: 'Descrição do Item 2' },
      { id: 3, name: 'Item 3', description: 'Descrição do Item 3' },
      { id: 4, name: 'Item 4', description: 'Descrição do Item 4' },
      { id: 5, name: 'Item 5', description: 'Descrição do Item 5' },
      { id: 6, name: 'Item 6', description: 'Descrição do Item 6' },
      { id: 7, name: 'Item 7', description: 'Descrição do Item 7' },
      { id: 8, name: 'Item 8', description: 'Descrição do Item 8' },
      { id: 9, name: 'Item 9', description: 'Descrição do Item 9' },
      { id: 10, name: 'Item 10', description: 'Descrição do Item 10' }
    ];

    // Estilos para a lista e os itens da lista
    const styles = {
      container: {
        textAlign: 'center',
        padding: '20px'
      },
      title: {
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333'
      },
      list: {
        listStyleType: 'none',
        padding: 0,
        margin: '20px auto',
        maxWidth: '600px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
      },
      listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer' // Cursor para indicar que é clicável
      },
      lastItem: {
        borderBottom: 'none'
      },
      itemName: {
        fontWeight: 'bold'
      },
      itemDescription: {
        marginTop: '5px',
        color: '#555'
      }
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Minha Lista de Itens Click</h1>
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li
              key={item.id}
              style={index === items.length - 1 ? { ...styles.listItem, ...styles.lastItem } : styles.listItem}
              onClick={() => this.handleItemClick(item)}
            >
              <div style={styles.itemName}>{item.name}</div>
              <div style={styles.itemDescription}>{item.description}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemListClick;
