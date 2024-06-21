#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.
    int val, sum;
    sum = 0;
    for (int i = 0; i < 10; i++) {
        cin >> val;
        sum += val;
    }
    cout << sum;
    return 0;
}