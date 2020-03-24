import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
 datas=[
   {
     'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
     'name':'Biswa',
     'text':'Here are some text contents to be sorted .',
     'date':'17/03/2020'
   },
   {
     'icon':'https://randomuser.me/api/portraits/women/57.jpg',
     'name':'Sai',
     'text':'Here are some text contents to be sorted',
     'date':'17/03/2020'
   },
   {
     'icon':'https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=429f6ca8c2584cb066893a0e0818effb.jpg',
     'name':'Vighnesh ',
     'text':'Here are some text contents to be sorted',
     'date':'17/03/2020'
   },
   {
    'icon':'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d1ff5086e5ca75cda4bcc8e470d8af11.jpg',
     'name':'Amaan',
     'text':'Here are some text contents to be sorted',
     'date':'17/03/2020' 
   },
   {
    'icon':'https://images.pexels.com/photos/604146/pexels-photo-604146.jpeg?h=350&auto=compress&cs=tinysrgb.jpg',
    'name':'Raju',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
   },
   {
    'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    'name':'Biswa',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
  },
  {
    'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    'name':'Biswa',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
  },
  {
    'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    'name':'Biswa',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
  },
  {
    'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    'name':'Biswa',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
  },
  {
    'icon':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    'name':'Biswa',
    'text':'Here are some text contents to be sorted',
    'date':'17/03/2020'
  }
 ]
  


  constructor() { }

  ngOnInit() {}
 
}
