#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int a[n];
    int val;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    for (int i = n - 1; i >= 0; i--) {
        if (a[i] % 2 == 0) {
            cout << a[i] << " ";
        }
    }
    return 0;
}