//
//  DMToDoItemViewController.m
//  iOSDeveloperLibraryGettingStarted
//
//  Created by Srikanth Nutigattu on 18/06/14.
//  Copyright (c) 2014 Srikanth Nutigattu. All rights reserved.
//

#import "DMToDoItemViewController.h"

@interface DMToDoItemViewController ()
@property (weak, nonatomic) IBOutlet UITextField *itemText;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *Done;

@end

@implementation DMToDoItemViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}




#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    if(sender != self.Done) return;
    
    if(self.itemText.text.length > 0){
        self.item = [[DMToDoItem alloc]init];
        self.item.itemName = self.itemText.text;
        self.item.completed = NO;
        
    }

}


@end
